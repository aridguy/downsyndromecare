// // components/NotificationBell.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import Swal from 'sweetalert2';

// const NotificationBell = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const dropdownRef = useRef(null);

//   const colors = {
//     green: '#2D6A4F',
//     darkGreen: '#1B4332',
//     lightGreen: '#40916C',
//     gray: '#5A5A5A',
//     lightGray: '#F8F9FA',
//     white: '#FFFFFF',
//     red: '#E76F51',
//     darkRed: '#C14C33'
//   };

//   // Sample notifications - You can fetch these from an API
//   const sampleNotifications = [
//     {
//       id: 1,
//       title: '🎉 New Program Launch',
//       message: 'We are launching a new Down Syndrome Awareness Program next month. Register now!',
//       date: '2026-05-22T10:00:00',
//       read: false,
//       type: 'event',
//       link: '/programs/new'
//     },
//     {
//       id: 2,
//       title: '📢 Volunteer Needed',
//       message: 'We are looking for volunteers for our upcoming community outreach in Lagos.',
//       date: '2026-05-21T14:30:00',
//       read: false,
//       type: 'volunteer',
//       link: '/volunteer'
//     },
//     {
//       id: 3,
//       title: '💝 Thank You Donors',
//       message: 'Thanks to your generous donations, we reached our Q2 goal!',
//       date: '2026-05-20T09:15:00',
//       read: true,
//       type: 'update',
//       link: '/donation'
//     },
//     {
//       id: 4,
//       title: '📅 Upcoming Event',
//       message: 'World Down Syndrome Day Celebration - March 21st. Join us!',
//       date: '2026-05-19T16:45:00',
//       read: true,
//       type: 'event',
//       link: '/events'
//     },
//     {
//       id: 5,
//       title: '📰 New Article Published',
//       message: 'Read our latest article on "Understanding Down Syndrome"',
//       date: '2026-05-18T11:20:00',
//       read: false,
//       type: 'article',
//       link: '/articles'
//     }
//   ];

//   // Load notifications from localStorage or API
//   useEffect(() => {
//     const savedNotifications = localStorage.getItem('notifications');
//     if (savedNotifications) {
//       const parsed = JSON.parse(savedNotifications);
//       setNotifications(parsed);
//       setUnreadCount(parsed.filter(n => !n.read).length);
//     } else {
//       setNotifications(sampleNotifications);
//       setUnreadCount(sampleNotifications.filter(n => !n.read).length);
//       localStorage.setItem('notifications', JSON.stringify(sampleNotifications));
//     }
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Mark notification as read
//   const markAsRead = (notificationId) => {
//     const updated = notifications.map(notif =>
//       notif.id === notificationId ? { ...notif, read: true } : notif
//     );
//     setNotifications(updated);
//     setUnreadCount(updated.filter(n => !n.read).length);
//     localStorage.setItem('notifications', JSON.stringify(updated));
//   };

//   // Mark all as read
//   const markAllAsRead = () => {
//     const updated = notifications.map(notif => ({ ...notif, read: true }));
//     setNotifications(updated);
//     setUnreadCount(0);
//     localStorage.setItem('notifications', JSON.stringify(updated));
//     Swal.fire({
//       title: 'All Read!',
//       text: 'All notifications marked as read.',
//       icon: 'success',
//       confirmButtonColor: colors.green,
//       timer: 1500,
//       showConfirmButton: false
//     });
//   };

//   // Clear all notifications
//   const clearAll = () => {
//     Swal.fire({
//       title: 'Clear All Notifications?',
//       text: 'This action cannot be undone.',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: colors.red,
//       cancelButtonColor: colors.gray,
//       confirmButtonText: 'Yes, clear all'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setNotifications([]);
//         setUnreadCount(0);
//         localStorage.setItem('notifications', JSON.stringify([]));
//         Swal.fire({
//           title: 'Cleared!',
//           text: 'All notifications have been removed.',
//           icon: 'success',
//           confirmButtonColor: colors.green
//         });
//       }
//     });
//   };

//   // Handle notification click
//   const handleNotificationClick = (notification) => {
//     markAsRead(notification.id);
//     setShowDropdown(false);
    
//     // Navigate to link if provided
//     if (notification.link) {
//       window.location.href = notification.link;
//     } else {
//       // Show full notification in modal
//       Swal.fire({
//         title: notification.title,
//         html: `<p style="color: #666;">${notification.message}</p><small style="color: #999;">${new Date(notification.date).toLocaleString()}</small>`,
//         icon: 'info',
//         confirmButtonColor: colors.green
//       });
//     }
//   };

//   // Format date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diff = now - date;
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor(diff / (1000 * 60));

//     if (minutes < 1) return 'Just now';
//     if (minutes < 60) return `${minutes} min ago`;
//     if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
//     if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
//     return date.toLocaleDateString();
//   };

//   // Get notification icon based on type
//   const getNotificationIcon = (type) => {
//     switch(type) {
//       case 'event': return '📅';
//       case 'volunteer': return '🤝';
//       case 'article': return '📰';
//       case 'update': return '💝';
//       default: return '🔔';
//     }
//   };

//   return (
//     <div className="notification-bell" ref={dropdownRef}>
//       {/* Bell Icon */}
//       <button 
//         className="bell-button"
//         onClick={() => setShowDropdown(!showDropdown)}
//       >
//         <span className="bell-icon">🔔</span>
//         {unreadCount > 0 && (
//           <span className="badge-count">{unreadCount > 99 ? '99+' : unreadCount}</span>
//         )}
//       </button>

//       {/* Dropdown */}
//       {showDropdown && (
//         <div className="notification-dropdown">
//           <div className="dropdown-header">
//             <h3>Notifications</h3>
//             <div className="dropdown-actions">
//               {notifications.length > 0 && unreadCount > 0 && (
//                 <button onClick={markAllAsRead} className="action-btn">Mark all read</button>
//               )}
//               {notifications.length > 0 && (
//                 <button onClick={clearAll} className="action-btn clear">Clear all</button>
//               )}
//             </div>
//           </div>

//           <div className="dropdown-content">
//             {notifications.length === 0 ? (
//               <div className="empty-state">
//                 <span className="empty-icon">🔕</span>
//                 <p>No notifications</p>
//                 <small>Check back later for updates</small>
//               </div>
//             ) : (
//               notifications.map(notification => (
//                 <div 
//                   key={notification.id}
//                   className={`notification-item ${!notification.read ? 'unread' : ''}`}
//                   onClick={() => handleNotificationClick(notification)}
//                 >
//                   <div className="notification-icon">
//                     {getNotificationIcon(notification.type)}
//                   </div>
//                   <div className="notification-content">
//                     <div className="notification-title">{notification.title}</div>
//                     <div className="notification-message">{notification.message}</div>
//                     <div className="notification-time">{formatDate(notification.date)}</div>
//                   </div>
//                   {!notification.read && <div className="unread-dot"></div>}
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       )}

//       <style>{`
//         .notification-bell {
//           position: relative;
//           display: inline-block;
//         }

//         .bell-button {
//           position: relative;
//           background: transparent;
//           border: none;
//           cursor: pointer;
//           padding: 0.5rem;
//           border-radius: 50%;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .bell-button:hover {
//           background: rgba(0, 0, 0, 0.05);
//           transform: scale(1.05);
//         }

//         .bell-icon {
//           font-size: 1.4rem;
//         }

//         .badge-count {
//           position: absolute;
//           top: -5px;
//           right: -5px;
//           background: #E76F51;
//           color: white;
//           font-size: 0.65rem;
//           font-weight: bold;
//           min-width: 18px;
//           height: 18px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0 4px;
//         }

//         /* Dropdown */
//         .notification-dropdown {
//           position: absolute;
//           top: 45px;
//           right: 0;
//           width: 380px;
//           max-width: 90vw;
//           background: white;
//           border-radius: 16px;
//           box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
//           z-index: 1000;
//           overflow: hidden;
//           animation: slideDown 0.2s ease;
//         }

//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .dropdown-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem;
//           border-bottom: 1px solid #eee;
//           background: white;
//         }

//         .dropdown-header h3 {
//           margin: 0;
//           font-size: 1rem;
//           font-weight: 600;
//           color: #1B4332;
//         }

//         .dropdown-actions {
//           display: flex;
//           gap: 0.5rem;
//         }

//         .action-btn {
//           background: none;
//           border: none;
//           font-size: 0.7rem;
//           color: #2D6A4F;
//           cursor: pointer;
//           padding: 0.25rem 0.5rem;
//           border-radius: 4px;
//           transition: all 0.2s;
//         }

//         .action-btn:hover {
//           background: #F8F9FA;
//           text-decoration: underline;
//         }

//         .action-btn.clear:hover {
//           color: #E76F51;
//         }

//         .dropdown-content {
//           max-height: 450px;
//           overflow-y: auto;
//         }

//         /* Notification Item */
//         .notification-item {
//           display: flex;
//           align-items: flex-start;
//           gap: 0.75rem;
//           padding: 1rem;
//           border-bottom: 1px solid #f0f0f0;
//           cursor: pointer;
//           transition: background 0.2s;
//           position: relative;
//         }

//         .notification-item:hover {
//           background: #F8F9FA;
//         }

//         .notification-item.unread {
//           background: #FEFAE0;
//         }

//         .notification-icon {
//           font-size: 1.4rem;
//           min-width: 40px;
//           text-align: center;
//         }

//         .notification-content {
//           flex: 1;
//         }

//         .notification-title {
//           font-weight: 600;
//           font-size: 0.85rem;
//           color: #1B4332;
//           margin-bottom: 0.25rem;
//         }

//         .notification-message {
//           font-size: 0.75rem;
//           color: #5A5A5A;
//           line-height: 1.4;
//           margin-bottom: 0.25rem;
//         }

//         .notification-time {
//           font-size: 0.65rem;
//           color: #999;
//         }

//         .unread-dot {
//           width: 8px;
//           height: 8px;
//           background: #2D6A4F;
//           border-radius: 50%;
//           position: absolute;
//           top: 1rem;
//           right: 1rem;
//         }

//         /* Empty State */
//         .empty-state {
//           text-align: center;
//           padding: 2rem;
//         }

//         .empty-icon {
//           font-size: 3rem;
//           opacity: 0.5;
//           display: block;
//           margin-bottom: 0.5rem;
//         }

//         .empty-state p {
//           margin: 0;
//           color: #666;
//           font-size: 0.9rem;
//         }

//         .empty-state small {
//           color: #999;
//           font-size: 0.7rem;
//         }

//         /* Scrollbar */
//         .dropdown-content::-webkit-scrollbar {
//           width: 5px;
//         }

//         .dropdown-content::-webkit-scrollbar-track {
//           background: #f1f1f1;
//         }

//         .dropdown-content::-webkit-scrollbar-thumb {
//           background: #ccc;
//           border-radius: 5px;
//         }

//         .dropdown-content::-webkit-scrollbar-thumb:hover {
//           background: #aaa;
//         }

//         /* Mobile */
//         @media (max-width: 480px) {
//           .notification-dropdown {
//             width: 95vw;
//             right: -10px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default NotificationBell;