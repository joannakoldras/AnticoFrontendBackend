namespace Database.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateDatabaseTablesWithAnnotations : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        OrderId = c.Int(nullable: false, identity: true),
                        LongTextId = c.String(maxLength: 50),
                        UserId = c.Int(nullable: false),
                        ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.OrderId)
                .ForeignKey("dbo.Products", t => t.ProductId, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.ProductId);
            
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        ProductId = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 50),
                        Description = c.String(maxLength: 500),
                        IsAvaliable = c.Boolean(nullable: false),
                        FilePathPhoto = c.String(),
                        Price = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.ProductId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 50),
                        Surname = c.String(maxLength: 50),
                        Email = c.String(maxLength: 50),
                        EncryptedPassword = c.String(maxLength: 250),
                        UserName = c.String(maxLength: 50),
                    })
                .PrimaryKey(t => t.UserId);
            
            CreateTable(
                "dbo.ProductCategories",
                c => new
                    {
                        CategoryId = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 50),
                    })
                .PrimaryKey(t => t.CategoryId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Orders", "UserId", "dbo.Users");
            DropForeignKey("dbo.Orders", "ProductId", "dbo.Products");
            DropIndex("dbo.Orders", new[] { "ProductId" });
            DropIndex("dbo.Orders", new[] { "UserId" });
            DropTable("dbo.ProductCategories");
            DropTable("dbo.Users");
            DropTable("dbo.Products");
            DropTable("dbo.Orders");
        }
    }
}
