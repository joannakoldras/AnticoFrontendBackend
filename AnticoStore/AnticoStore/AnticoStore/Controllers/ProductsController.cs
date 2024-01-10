using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.DataWrappers;
using WebApi.Services.ProductServices;
using WebApi.ViewModels;

namespace AnticoStore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private IProductFinderService _productFinderService { get; set; }
        private IProductCrudService _productCrudService { get; set; }
        public ProductsController()
        {
            _productFinderService = new ProductFinderService();
            _productCrudService = new ProductCrudService();
        }

        [HttpGet(Name = "Products")]
        public DataResult GetAllProducts()
        {
            return _productFinderService.GetAllProducts();
        }

        [HttpGet("{searchString}")]
        public DataResult FindProducts(string searchString)
        {
            return _productFinderService.FindProducts(searchString);
        }

        [HttpGet("Categories/{category}")]
        public DataResult GetProductsByCategory(string category)
        {
            return _productFinderService.GetProductsByCategory(category);
        }

        [Authorize]
        [HttpPost]
        public DataResult AddProduct(ProductViewModel product)
        {
            return _productCrudService.AddProductToDb(product);
        }

        [Authorize]
        [HttpPut]
        public DataResult UpdateProduct(ProductViewModel product)
        {
            return _productCrudService.UpdateProductInDb(product);
        }

        [Authorize]
        [HttpDelete]
        public DataResult DeleteProduct(ProductViewModel product)
        {
            return _productCrudService.DeleteProductFromDb(product);
        }
    }
}
