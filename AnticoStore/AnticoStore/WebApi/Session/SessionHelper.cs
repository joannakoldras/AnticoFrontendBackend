using Database.DbModels;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Web.Mvc;

namespace WebApi.Session
{
     public class SessionHelper 
    {
        private IHttpContextAccessor httpContextAccessor;
        private int sessionItemCounter; 
        public SessionHelper()
        {
            httpContextAccessor = new HttpContextAccessor();
            sessionItemCounter = 0;
            CountItemsInSession(); 
        }
        public void SetSessionWithValue(object value)
        {
            SetObjectAsJson("1", value); 
        }

        public IEnumerable<Product> GetAllItemsFromSession()
        {
            var items = new List<Product>(); 
            for (int i=0; i<sessionItemCounter; i++)
            {
               // var sessionItem = GetObjectFromJson<Product>(i.ToString()); 
                //items.Add(sessionItem); 
            } 
            return items;  
        }

        private void SetObjectAsJson(string key, object value)
        {
            //httpContextAccessor.HttpContext.Session.SetString(sessionItemCounter.ToString(), JsonConvert.SerializeObject(value));
        }

        //private T GetObjectFromJson<T>(string key)
        //{
        //    //var value = httpContextAccessor.HttpContext.Session.GetString(key);
        //    //return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value); 
        //    return string.Empty; 
        //}

        //do naprawy ponowne ustawianie obiektów w sesji
        public bool DeleteItemFromSession(Product product)
        {
            var items = GetAllItemsFromSession().ToList();
            var itemToDelete = items.Where(x => x.Id == product.Id).FirstOrDefault(); 

            if(itemToDelete != null)
            {
                items.Remove(itemToDelete); 
            }
            else
            {
                return false; 
            }

            ClearSession(); 
            var counter = 0; 
            
            foreach (var item in items)
            {
                SetObjectAsJson(counter.ToString(), item); 
                counter++; 
            }
            return true; 
        }

        private void ClearSession()
        {
            httpContextAccessor.HttpContext.Session.Clear(); 
        }

        private void CountItemsInSession()
        {
            sessionItemCounter = httpContextAccessor.HttpContext.Session.Keys.Count(); 
        }


    }
}
