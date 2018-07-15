import People from '../models/people';

class PeoplesControllers {
  
  async find(ctx) {
     const people = await People.find();
     ctx.body = {"statusCode":"2xx", "data" :people};
  }

  
  async findById(ctx) {
    try {
      const people = await People.findById(ctx.params.id);
      if (!people) {
        ctx.throw(404);
      }
      ctx.body = {"statusCode":"2xx", "data" :people};
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }


  async add(ctx) {
    try {
      const people = await new People(ctx.request.body).save();
      ctx.body = {"statusCode":"2xx", "data" :people};
    } catch (err) {
      ctx.throw(422);
    }
  }

  


  async delete(ctx) {
    try {
      const people = await People.findByIdAndRemove(ctx.params.id);
      if (!people) {
        ctx.throw(404);
      }
      ctx.body = {"statusCode":"2xx", "data" :people};
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

}

export default new PeoplesControllers();
