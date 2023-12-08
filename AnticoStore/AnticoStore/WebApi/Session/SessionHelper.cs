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
        private IHttpContextAccessor _httpContextAccessor { get; set; }
        private int sessionItemCounter; 
        public SessionHelper(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor; 
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
                var sessionItem = GetObjectFromJson<Product>(i.ToString()); 
                items.Add(sessionItem); 
            } 
            return items;  
        }

        private void SetObjectAsJson(string key, object value)
        {
            _httpContextAccessor.HttpContext.Session.SetString(sessionItemCounter.ToString(), JsonConvert.SerializeObject(value));
        }

        private T GetObjectFromJson<T>(string key)
        {
            var value = _httpContextAccessor.HttpContext.Session.GetString(key);
            return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value); 
        }

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
            _httpContextAccessor.HttpContext.Session.Clear(); 
        }

        private void CountItemsInSession()
        {
            sessionItemCounter = _httpContextAccessor.HttpContext.Session.Keys.Count(); 
        }


    }
}
