using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UnitTestSample.Models
{
    public class DatabaseOpetaions
    {
        private ApplicationDbContext _db = new ApplicationDbContext();
        public DatabaseOpetaions()
        {
            _db.Database.CreateIfNotExists();
        }
        public List<Tutorial> GetTutorials()
        {
            return _db.Tutorials.ToList();
        }

        public int Addtutorial(Tutorial element)
        {
            _db.Tutorials.Add(element);

            return _db.SaveChanges();
        }

    }
}