using Database.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApi.DomainModels
{
    public class ShoppingCart
    {
        private List<Product> products { get; set; }
        public ShoppingCart()
        {
            this.products = new List<Product>();
        }

        public void AddToShoppingCart(Product product)
        {
            products.Add(product);
        }

        public bool DeleteFromShoppingCart(Product product)
        {
            var item = FindProductInShoppingCartById(product);
            if (item != null)
            {
                this.products.Remove(item);
                return true;
            }
            return false;
        }

        public Product FindProductInShoppingCartById(Product product)
        {
            var item = products.Find(x => x.Id == product.Id);
            return item;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return products;
        }
    }
}
