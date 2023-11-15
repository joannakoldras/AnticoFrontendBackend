using Database.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.DataWrappers;

namespace WebApi.Repository
{
    public interface IProductRepository
    {
        DataResult AddProduct(Product product);
        DataResult UpdateProduct(Product product);
        DataResult DeleteProduct(Product product);
    }
}
