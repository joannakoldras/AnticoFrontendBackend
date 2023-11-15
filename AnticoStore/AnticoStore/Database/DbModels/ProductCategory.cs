using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database.DbModels
{
    [Table("ProductCategories")]
    public class ProductCategory
    {
        [Column("CategoryId")]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] //autoinkrementacja 
        [Required]
        public int Id { get; set; }

        [StringLength(50)]
        public string Name { get; set; }
    }
}
