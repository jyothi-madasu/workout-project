using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class CategoryRepo
    {

        public List<workout_categories> GetAll()
        {
            try
            {
                using (WorktrackerEntities objcontext = new WorktrackerEntities())
                {
                    var query = from obj in objcontext.workout_categories
                                select obj;

                    return query.ToList();
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }


        }
        public workout_categories GetById(int catagoryid)
        {
            try
            {
                using (WorktrackerEntities objcontext = new WorktrackerEntities())
                {
                    var query = (from obj in objcontext.workout_categories
                                 where obj.category_id == catagoryid
                                 select obj).FirstOrDefault();

                    return query;
                }
            }

            catch (Exception ex)
            {
                throw ex;
            }

        }

        public void AddCategory(workout_categories obj)
        {
            try
            {
                WorktrackerEntities db = new WorktrackerEntities();
                db.workout_categories.Add(obj);
                db.SaveChanges();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    
        public void EditCategory(workout_categories item)
        {
            try
            {
                WorktrackerEntities db = new WorktrackerEntities();
                var query = (from obj in db.workout_categories
                             where obj.category_id == obj.category_id
                             select obj).First();
                query.category_name = item.category_name;
                db.SaveChanges();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        public void DeleteCategory(int categoryid)
        {
            Console.WriteLine("enter category id to delete");
            int id = int.Parse(Console.ReadLine());
            try
            {
                WorktrackerEntities db = new WorktrackerEntities();
                var query=(from obj in db.workout_categories
                           where obj.category_id == obj.category_id
                           select obj).First();
                db.workout_categories.Remove(query);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
    



