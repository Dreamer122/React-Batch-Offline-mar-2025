import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { databases} from '../Appwrite/Config'
import { Query } from 'appwrite';
import { useNavigate } from 'react-router';
import {setPosts} from "../redux/postsSlice"
import {Sidebar} from "../Components/DashBoard/Sidebar"


const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const [summary, setSummary] = useState({ draft: 0, published: 0 });
  const navigate = useNavigate();
  const dispatch=useDispatch();

//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//       return;
//     }

//     const fetchSummary = async () => {
//       try {
//         const response = await databases.listDocuments(
//           import.meta.env.VITE_APPWRITE_DATABASE_ID,
//           import.meta.env.VITE_APPWRITE_BLOGS_COLLECTION_ID,
//           [Query.equal('userId', user.$id)]
//         );
//         dispatch(setPosts(response.documents))


//         const draft = response.documents.filter((doc) => doc.status === 'draft').length;
//         const published = response.documents.filter((doc) => doc.status === 'published').length;

//         setSummary({ draft, published });
//       } catch (err) {
//         console.error('Error fetching summary:', err);
//       }
//     };

//     fetchSummary();
//   }, [user]);

  return (
    <div className='w-full bg-blue-100 border-green-800 border-2' 
    
     style={{ height: 'calc(100vh - 80px)' }}>
        <div>
            
      <h2>Welcome, {user?.name || user?.email}</h2>
        </div>
      
      {/* <div>
        <h3>Summary</h3>
        <p>Total Blogs: {summary.draft + summary.published}</p>
        <p>Drafts: {summary.draft}</p>
        <p>Published: {summary.published}</p>
      </div> */}

      <div className='flex w-full sticky left-0 top-0 border  '>
        
        <Sidebar/>
        <div className='w-6/12'>
        main layout

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
