using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using BusinessLogic;
namespace WorkUnitTest
{
    [TestFixture]
    public class Categorytest
    {
        [Test]
        public void GetAllCategoriesTest()
        {
           CategoryRepo obj = new CategoryRepo();
            int Expected = 0;
            var Actual = obj.GetAll().Count();
            Assert.AreEqual(Expected, Actual);
        }
    }
}
