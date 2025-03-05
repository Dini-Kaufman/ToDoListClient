import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5257"; // הכתובת הראשית של ה-API


// הוספת Interceptor לשגיאות
axios.interceptors.response.use(
  (response) => response, // אם אין שגיאות, מחזיר את התגובה כרגיל
  (error) => {
    console.error("Axios Error:", error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    const result=await axios.post(`/items`,{ name, isComplete: false })
    return result.data;
  },

  setCompleted: async(id, name, isComplete)=>{
    const result=await axios.put(`/items/${id}`, { name,isComplete })
    return result.data
  },

  deleteTask:async(id)=>{
    const result=await axios.delete(`/items/${id}`)
    return result.data
  }
};
