import React, { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import axios from "../utils/axiosConfig"; // axios đã config sẵn

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      const decoded = jwtDecode(token);
      const userId = decoded.user_id || decoded.id;

      // Gọi API để lấy user info
      const userRes = await axios.get(`/accounts/user_info/`);
      const userData = userRes.data;

      // Gọi API để lấy playlist
      const playlistRes = await axios.get(`/accounts/playlists/`);
      const playlists = playlistRes.data;

      setUser({ ...userData, playlists });
    } catch (err) {
      console.error("Lỗi khi lấy thông tin người dùng:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center mt-10 text-lg">
        Loading user info...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-white text-center mt-10 text-lg">
        Không thể tải thông tin người dùng.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500">
          {user.username}
        </h1>
        <h3 className="text-lg font-semibold text-gray-300 mb-4">{user.email}</h3>
      </div>

      <h2 className="text-3xl font-semibold mb-6 text-center text-white">
        Your Playlists
      </h2>

      {user.playlists.length === 0 ? (
        <p className="text-gray-400 text-center">
          You don't have any playlists yet.
        </p>
      ) : (
        <div className="space-y-8">
          {user.playlists.map((playlist, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-lg shadow-lg border-4 border-transparent hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-xl font-medium text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-500 to-lime-500">
                    {playlist.name}
                  </span>
                  {" - "}
                  <span className="text-gray-400">
                    {playlist.songs.length}{" "}
                    {playlist.songs.length === 1 ? "song" : "songs"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;



// import React, { useEffect, useState } from "react";

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   if (!user) {
//     return (
//       <div className="text-white text-center mt-10 text-lg">
//         Loading user info...
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 px-6 py-16">
//       {/* User's profile header with gradient */}
//       <div className="text-center mb-10">
//         <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500">
//           {user.username}
//         </h1>
//         <h3 className="text-lg font-semibold text-gray-300 mb-4">{user.email}</h3>
//       </div>

//       <h2 className="text-3xl font-semibold mb-6 text-center text-white">
//         Your Playlists
//       </h2>

//       {user.playlists.length === 0 ? (
//         <p className="text-gray-400 text-center">
//           You don't have any playlists yet.
//         </p>
//       ) : (
//         <div className="space-y-8">
//           {user.playlists.map((playlist, idx) => (
//             <div
//               key={idx}
//               className="p-6 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-lg shadow-lg border-4 border-transparent hover:border-blue-500 transition-all duration-300"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <div className="text-xl font-medium text-white">
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-500 to-lime-500">
//                     {playlist.name}
//                   </span>
//                   {" - "}
//                   <span className="text-gray-400">
//                     {playlist.song_ids.length}{" "}
//                     {playlist.song_ids.length === 1 ? "song" : "songs"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
