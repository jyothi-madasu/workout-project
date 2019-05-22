using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusinessLogic;

namespace WebApiUi.Controllers
{
    public class CategoryWebController : ApiController
    {
        WorktrackerEntities db = new WorktrackerEntities();
        public IHttpActionResult Get()

        {
            return Ok(db.workout_categories.ToArray());
        }
        public IHttpActionResult post(workout_categories obj)
        {
            db.workout_categories.Add(obj);
            var rows = db.SaveChanges();
            if (rows > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            else
            {
                return BadRequest("not saved");
            }
        }

        public IHttpActionResult Get(int id)
        {
            if (id < 0)
            {
                return BadRequest("Invalid workoutid number ");
            }
            var Obj = db.workout_categories.Find(id);
            if (Obj == null)
            {
                return NotFound();
            }
            return Ok(Obj);
        }

        public IHttpActionResult Put(workout_categories obj)
        {
            db.workout_categories.Attach(obj);
            db.Entry(obj).State = System.Data.Entity.EntityState.Modified;

            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("Failed To Modify supplier");
            }
        }

        public IHttpActionResult Delete(int id)
        {
            var Obj = db.workout_categories.Find(id);
            if (Obj == null)
            {
                return NotFound();
            }
            db.workout_categories.Remove(Obj);
            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest("Failed to Delete workout");
            }
        }

    }


}

       
    
