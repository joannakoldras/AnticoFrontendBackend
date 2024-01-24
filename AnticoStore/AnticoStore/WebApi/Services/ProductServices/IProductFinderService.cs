using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.DataWrappers;

namespace WebApi.Services.ProductServices
{
    public interface IProductFinderService
    {
        public DataResult GetAllProducts();
        public DataResult GetProductsByCategory(string category);
        public DataResult FindProducts(string searchString);
        public DataResult GetProductById(int productId);
    }
}
