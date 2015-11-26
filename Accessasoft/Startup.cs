using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Accessasoft.Startup))]
namespace Accessasoft
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
