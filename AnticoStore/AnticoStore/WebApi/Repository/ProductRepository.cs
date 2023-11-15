using Database.DbConnection;
using Database.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.DataWrappers;

namespace WebApi.Repository
{
    public class ProductRepository : IProductRepository
    {
        public DataResult AddProduct(Product product)
        {
            try
            {
                using (var db = new AnticoDbContext())
                {
                    db.Products.Add(product);
                    db.SaveChanges();
                }
                return new DataResult(true, "Succesfully added");
            }
            catch (Exception exception)
            {
                return new DataResult(false, exception.Message);
            }
        }

        public DataResult UpdateProduct(Product product)
        {
            try
            {
                using (var db = new AnticoDbContext())
                {
                    var item = db.Products.Where(x => x.Id == product.Id).FirstOrDefault();
                    if (item != null)
                    {
                        item.Price = product.Price;
                        item.FilePathPhoto = product.FilePathPhoto;
                        item.Name = product.Name;
                        item.Description = product.Description;
                        item.CategoryId = product.CategoryId;
                        db.SaveChanges();
                    }
                    else
                    {
                        return new DataResult(false, "No product found in database to update");
                    }
                }
            }
            catch (Exception exception)
            {
                return new DataResult(false, exception.Message);
            }
            return new DataResult(true, "Succesfully updated in database");

        }

        public DataResult DeleteProduct(Product product)
        {
            using (var db = new AnticoDbContext())
            {
                var item = db.Products.Where(x => x.Id == product.Id).FirstOrDefault();
                if (item != null)
                {
                    db.Products.Remove(item);
                    db.SaveChanges();
                }
                else
                {
                    return new DataResult(false, "No product found to delete in database");
                }
            }
            return new DataResult(true, "Product deleted from database");
        }
    }
}
