using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(UnitTestSample.Startup))]
namespace UnitTestSample
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
