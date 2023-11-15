using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.DataWrappers;
using WebApi.ViewModels;

namespace WebApi.Services.ShopingCartServices
{
    public interface IShoppingCartService
    {
        DataResult AddProductToShoppingCart(ProductViewModel productVM);
        DataResult DeleteProductFromShoppingCart(ProductViewModel productVM);
        DataResult GetAllProductsFromShoppingCart();
    }
}
