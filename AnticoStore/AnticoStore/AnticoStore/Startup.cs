using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;

namespace AnticoStore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpContextAccessor();
            services.AddDistributedMemoryCache();
            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromSeconds(10); 
            });
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>(); 

            //services.AddControllersWithViews();                                      // odkomentowac aby wlaczyc aplikacje dzialajaca z frontendem 
            // In production, the React files will be served from this directory     
            //services.AddSpaStaticFiles(configuration =>                              //front
            //{                                                                        //
            //    configuration.RootPath = "ClientApp/build";                          // odkomentowac aby wlaczyc aplikacje dzialajaca z frontendem 
            //});                                                                     // Wazne ! - ustawiæ URL w Project -> Properties -> Debug ->  Opcja: Launch browser ---- na pusty URL - ma tam nie byæ nic
            //

            services.AddControllers();                                             // odkomentowac aby wlaczyc swaggera
            
            services.AddSwaggerGen(c => {                                          //  
                c.SwaggerDoc("v1", new OpenApiInfo                                 //  
                {                                                                  //  
                    Title = "SwaggerDemoApplication",                              // odkomentowac aby wlaczyc swaggera
                    Version = "v1"                                                 // Wazne ! - ustawiæ URL w Project -> Properties -> Debug -> Opcja: Launch browser ---- swagger/index.html
                });                                                                //  
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseSession(); 

            app.UseSwagger();           // odkomentowac aby wlaczyc swaggera
            app.UseSwaggerUI();         // odkomentowac aby wlaczyc swaggera
            app.UseHttpsRedirection();  // odkomentowac aby wlaczyc swaggera
            
            app.UseRouting();           // odkomentowac aby wlaczyc swaggera
            app.UseEndpoints(endpoints =>    //
            {                                //
                endpoints.MapControllers();  //  odkomentowac aby wlaczyc swaggera
            });                              //
                                             //
            //app.UseAuthorization();     // odkomentowac aby wlaczyc swaggera
            //
            //app.UseStaticFiles();         // odkomentowac aby wlaczyc aplikacje dzialajaca z frontendem
            //app.UseSpaStaticFiles();      // odkomentowac aby wlaczyc aplikacje dzialajaca z frontendem
            //
            //app.UseRouting();             // odkomentowac aby wlaczyc aplikacje dzialajaca z frontendem
            //
            //app.UseEndpoints(endpoints =>                                  //
            //{                                                              //
            //    endpoints.MapControllerRoute(                              //
            //        name: "default",                                       // odkomentowac aby wlaczyc aplikacje dzialajaca z frontendem
            //        pattern: "{controller}/{action=Index}/{id?}");         //
            //});                                                            //
            //
            //app.UseSpa(spa =>                                              // 
            //{                                                              //
            //    spa.Options.SourcePath = "ClientApp";                      //
            //                                                               //
            //    if (env.IsDevelopment())                                   // odkomentowac aby wlaczyc aplikacje dzialajaca z frontendem
            //    {                                                          //
            //        spa.UseReactDevelopmentServer(npmScript: "start");     //
            //    }                                                          //
            //});                                                            //
        }
    }
}
