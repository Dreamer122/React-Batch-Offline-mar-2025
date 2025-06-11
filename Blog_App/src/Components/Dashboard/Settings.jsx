import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router'
import { databases, storage } from '../../appwrite/Config'
import { Query, ID } from 'appwrite'
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { setUserInfo } from '../../redux/Slices/userSlice'

export const Settings = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.user)
  const { handleSubmit, register, formState: { errors }, setValue, watch, reset } = useForm({
    defaultValues: userInfo || {}
  })
  const [profilepic, setProfilepic] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  const profile = watch('profilePic')
// {0:file,1:}
  // Set preview image based on selected file or existing image
  useEffect(() => {
    const profilePreview = () => {
      const selectedFile = profile?.[0];

      if (selectedFile instanceof File) {
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
          setProfilepic(fileReader.result)
        }
        fileReader.readAsDataURL(selectedFile)
      } else if (userInfo?.profilePic && typeof userInfo.profilePic === 'string') {
        setProfilepic(userInfo.profilePic)
      }
    }

    profilePreview()
  }, [profile, userInfo])

  // Reset form when userInfo is updated
  useEffect(() => {
    reset(userInfo)
  }, [userInfo, reset])

  // Handle profile update
  const UpdateProfile = async (data, e) => {
    e.preventDefault()
    const toastId=toast.loading("updating profile...")
    try {
      let profileurl = ''
console.log(data.profilePic)
      if (data.profilePic && data.profilePic[0] instanceof File) {
        const response = await storage.createFile(
          import.meta.env.VITE_BUCKETID,
          ID.unique(),
          data.profilePic[0]
        )
        profileurl = storage.getFileView(
          import.meta.env.VITE_BUCKETID,
          response.$id
        )
        console.log("inside if profile")
      }

      const res = await databases.updateDocument(
        import.meta.env.VITE_DATABASEID,
        import.meta.env.VITE_USER_COLLECTIONID,
        userInfo.$id,
        {
          name: data.name,
          bio: data.bio,
          profilePic: profileurl || userInfo.profilePic
        }
      )
console.log("res",res)
      dispatch(setUserInfo(res))
      toast.success('Profile updated successfully',{
        id:toastId
      })
      navigate(`/dashboard/${id}`)
    } catch (error) {
      console.error('Error updating profile:', error)
      toast.error(error.message,{
        
        id:toastId
      }
      )
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(UpdateProfile)} className="space-y-4">
        {/* Profile Pic Upload */}
        <div>
          <label>Profile Picture</label><br />
          <input
            type="file"
            {...register('profilePic')}
            className="border"
            accept="image/*"
          />
          {profilepic && (
            <img
              src={profilepic}
              alt="Preview"
              className="w-18 h-18 rounded-full mt-2"
            />
          )}
        </div>

        {/* Name Input */}
        <div>
          <label>Name</label><br />
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="border outline-green-400 w-56"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

        {/* Bio Input */}
        <div>
          <label>Bio</label><br />
          <textarea
            {...register('bio', {
              minLength: { value: 10, message: 'Enter at least 10 characters' }
            })}
            className="border outline-green-400 w-56"
          ></textarea>
          {errors.bio && <span className="text-red-500 text-sm">{errors.bio.message}</span>}
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Update Profile"
          className="px-3 py-2 bg-green-400 text-green-800"
        />
      </form>
    </div>
  )
}
