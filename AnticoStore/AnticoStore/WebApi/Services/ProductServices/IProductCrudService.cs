using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.DataWrappers;
using WebApi.ViewModels;

namespace WebApi.Services.ProductServices
{
    public interface IProductCrudService
    {
        DataResult AddProductToDb(ProductViewModel productVM);
        DataResult UpdateProductInDb(ProductViewModel productVM);
        DataResult DeleteProductFromDb(ProductViewModel productVM);
    }
}
