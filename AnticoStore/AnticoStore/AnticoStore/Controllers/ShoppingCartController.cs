﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.DataWrappers;
using WebApi.Services.ShopingCartServices;
using WebApi.ViewModels;

namespace AnticoStore.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ShoppingCartController : ControllerBase
    {
        private IShoppingCartService _shoppingCartService { get; set; }
        private IHttpContextAccessor _httpContextAccessor; 

        public ShoppingCartController(IHttpContextAccessor httpContextAccessor)
        {
            _shoppingCartService = new ShoppingCartService(httpContextAccessor);
        }

        [Authorize]
        [HttpPost("Products")]
        public DataResult AddProductToShoppingCart(ProductViewModel product)
        {
            return _shoppingCartService.AddProductToShoppingCart(product);
        }

        [Authorize]
        [HttpGet("Products")]
        public DataResult GetAllProductsFromShoppingCart()
        {
            return _shoppingCartService.GetAllProductsFromShoppingCart(); 
        }

        [Authorize]
        [HttpDelete("Products")]
        public DataResult DeleteProductFromShoppingCart(ProductViewModel product)
        {
            return _shoppingCartService.DeleteProductFromShoppingCart(product);
        }
    }
}
