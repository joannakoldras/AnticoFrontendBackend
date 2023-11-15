using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.ViewModels.Enums;

namespace WebApi.ViewModels
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ProductCategoryEnum Category { get; set; }
        public bool IsAvaliable { get; set; }
        public string FilePathPhoto { get; set; }
        public double Price { get; set; }
    }
}
