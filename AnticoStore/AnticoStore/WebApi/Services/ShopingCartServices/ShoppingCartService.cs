using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.DataWrappers;
using WebApi.DomainModels;
using WebApi.Mappers;
using WebApi.ViewModels;

namespace WebApi.Services.ShopingCartServices
{
    public class ShoppingCartService : IShoppingCartService
    {
        private ShoppingCart shoppingCart { get; set; }

        public ShoppingCartService()
        {
            shoppingCart = new ShoppingCart();
        }

        public DataResult AddProductToShoppingCart(ProductViewModel productVM)
        {
            try
            {
                var product = productVM.ToProductDbModel();
                shoppingCart.AddToShoppingCart(product);
                return new DataResult(true, "Successfully added to cart");
            }
            catch (Exception ex)
            {
                return new DataResult(false, ex.Message);
            }
        }

        public DataResult DeleteProductFromShoppingCart(ProductViewModel productVM)
        {
            try
            {
                var product = productVM.ToProductDbModel();
                var isDeleted = shoppingCart.DeleteFromShoppingCart(product);
                return isDeleted == true ?
                    new DataResult(isDeleted, "Successfully deleted") :
                    new DataResult(isDeleted, "Product wasn't deleted from shopping cart");

            }
            catch (Exception ex)
            {
                return new DataResult(false, ex.Message);
            }
        }

        public DataResult GetAllProductsFromShoppingCart()
        {
            try
            {
                var products = shoppingCart.GetAllProducts();
                List<ProductViewModel> result = new List<ProductViewModel>();
                foreach (var product in products)
                {
                    result.Add(product.ToProductViewModel());
                }
                return new DataResult(true, result, "Data returned successfully");
            }
            catch (Exception ex)
            {
                return new DataResult(false, ex.Message);
            }
        }
    }
}
