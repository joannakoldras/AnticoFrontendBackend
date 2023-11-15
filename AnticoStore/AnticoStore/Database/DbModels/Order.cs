using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database.DbModels
{
    [Table("Orders")]
    public class Order
    {
        [Column("OrderId")]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] //autoinkrementacja 
        [Required]
        public int Id { get; set; }

        [StringLength(50)]
        public string LongTextId { get; set; } //id zam

        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User Id_UserId { get; set; }

        public int ProductId { get; set; }
        [ForeignKey("ProductId")]
        public virtual Product Id_ProductId { get; set; }
    }
}
