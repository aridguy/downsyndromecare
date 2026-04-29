// // cacheService.js
// const CACHE_KEYS = {
//     ALL_DATA: 'ngo_all_data',
//     PROJECTS: 'ngo_projects',
//     TEAM: 'ngo_team',
//     BLOG: 'ngo_blog',
//     DONATION_TIERS: 'ngo_donation_tiers'
// };

// const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// class CacheService {
//     // Check if cache is still valid
//     isCacheValid(cacheKey) {
//         const cached = localStorage.getItem(cacheKey);
//         if (!cached) return false;
        
//         const { timestamp } = JSON.parse(cached);
//         return (Date.now() - timestamp) < CACHE_DURATION;
//     }
    
//     // Get data from cache
//     get(cacheKey) {
//         if (!this.isCacheValid(cacheKey)) return null;
        
//         const cached = localStorage.getItem(cacheKey);
//         return cached ? JSON.parse(cached).data : null;
//     }
    
//     // Save data to cache
//     set(cacheKey, data) {
//         const cacheEntry = {
//             data: data,
//             timestamp: Date.now()
//         };
//         localStorage.setItem(cacheKey, JSON.stringify(cacheEntry));
//     }
    
//     // Clear specific cache
//     clear(cacheKey) {
//         localStorage.removeItem(cacheKey);
//     }
    
//     // Clear all NGO cache
//     clearAll() {
//         Object.values(CACHE_KEYS).forEach(key => {
//             localStorage.removeItem(key);
//         });
//     }
    
//     // Force refresh (useful after admin updates)
//     async forceRefresh(cacheKey, fetchFunction) {
//         const freshData = await fetchFunction();
//         this.set(cacheKey, freshData);
//         return freshData;
//     }
// }

// export { CacheService, CACHE_KEYS };
// export default new CacheService();