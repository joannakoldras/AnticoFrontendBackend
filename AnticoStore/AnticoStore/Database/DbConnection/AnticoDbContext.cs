using Database.DbModels;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database.DbConnection
{
    public class AnticoDbContext : DbContext
    {
        public AnticoDbContext() : base("AnticoDatabase")
        {

        }

        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
