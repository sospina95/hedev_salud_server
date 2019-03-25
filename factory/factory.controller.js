const FactoryCtrl = {};
FactoryCtrl.FactoryCore = async (req, res) => {
  const models_data = req.body[0].module;
  var Model = require('../models')[models_data];
  if (req.body[0].view == 'listview') {
    FactoryCtrl.index(Model, res);
  } else if (req.body[0].view == 'detailview') {
    FactoryCtrl.show(Model, res, req.body[0].id);
  } else if (req.body[0].view == 'createview') {
    console.log("req.body[0]",req.body[0]);
    FactoryCtrl.save(Model, res, req.body[0].formValue);
  }
};
FactoryCtrl.index = async (Models, res) => {
  console.log("-->",Models);
  
  await Models.findAll()
    .then(function (data) {
      if (data != null) {
        res.status(200).json({
          status: 200,
          output: data,
          detail: "Consulta Realizada"
        });
      } else {
        res.status(200).json({
          status: 200,
          output: data,
          detail: "No se encontraron Registros"
        })
      }
    })
    .catch(function (error) {
      res.status(500).json({
        status: 500,
        output: error,
        detail: "Error de Ejecucion"
      });
    });
};
FactoryCtrl.show = async (Models, res, id) => {
  await Models.findById(id).then(function (data) {
    if (data != null) {
      res.status(200).json({
        status: 200,
        output: data,
        detail: "Consulta Realizada"
      });
    } else {
      res.status(200).json({
        status: 200,
        output: data,
        detail: "No se encontraron Registros"
      })
    }
  })
  .catch(function (error) {
    res.status(500).json({
      status: 500,
      output: error,
      detail: "Error de Ejecucion"
    });
  });
};

FactoryCtrl.save = async (Models, res, formValue) => {
  await Models.upsert(formValue).then(function (data) {
    if (data != null) {
      res.status(200).json({
        status: 200,
        output: data,
        detail: "Consulta Realizada"
      });
    } else {
      res.status(200).json({
        status: 200,
        output: data,
        detail: "No se encontraron Registros"
      })
    }
  })
  .catch(function (error) {
    res.status(500).json({
      status: 500,
      output: error,
      detail: "Error de Ejecucion"
    });
  });
  
};

module.exports = FactoryCtrl;
