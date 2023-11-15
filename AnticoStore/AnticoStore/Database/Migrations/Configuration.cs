namespace Database.Migrations
{

    using System.Data.Entity.Migrations;
    using Database.DbConnection;

    internal sealed class Configuration : DbMigrationsConfiguration<AnticoDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AnticoDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.
        }
    }
}
