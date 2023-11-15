namespace Database.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateCategoryIdToNotMapped : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Products", "CategoryId", "dbo.ProductCategories");
            DropIndex("dbo.Products", new[] { "CategoryId" });
        }
        
        public override void Down()
        {
            CreateIndex("dbo.Products", "CategoryId");
            AddForeignKey("dbo.Products", "CategoryId", "dbo.ProductCategories", "CategoryId", cascadeDelete: true);
        }
    }
}
