using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApi.ViewModels
{
    public class OrderViewModel
    {
        public string OrderId { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
    }
}
