using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.DataWrappers;
using WebApi.Mappers;
using WebApi.Repository;
using WebApi.ViewModels;

namespace WebApi.Services.ProductServices
{
    public class ProductCrudService : IProductCrudService
    {
        private IProductRepository productRepository { get; set; }
        public ProductCrudService()
        {
            productRepository = new ProductRepository();
        }

        public DataResult AddProductToDb(ProductViewModel productVM)
        {
            var product = productVM.ToProductDbModel();
            var result = productRepository.AddProduct(product);
            return result;
        }

        public DataResult UpdateProductInDb(ProductViewModel productVM)
        {
            var product = productVM.ToProductDbModel();
            var result = productRepository.UpdateProduct(product);
            return result;
        }

        public DataResult DeleteProductFromDb(ProductViewModel productVM)
        {
            var product = productVM.ToProductDbModel();
            var result = productRepository.DeleteProduct(product);
            return result;
        }
    }
}
