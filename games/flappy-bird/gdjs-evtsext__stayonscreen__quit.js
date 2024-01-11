
gdjs.evtsExt__StayOnScreen__Quit = gdjs.evtsExt__StayOnScreen__Quit || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__StayOnScreen__Quit.Quit = class Quit extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__StayOnScreen__Quit.Quit.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__StayOnScreen__Quit.Quit.SharedData = class QuitSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__StayOnScreen__Quit.Quit.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._StayOnScreen_QuitSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._StayOnScreen_QuitSharedData = new gdjs.evtsExt__StayOnScreen__Quit.Quit.SharedData(
      initialData
    );
  }
  return instanceContainer._StayOnScreen_QuitSharedData;
}

// Methods:
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext = {};
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects1_1final = [];

gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects1_1final = [];

gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects1_1final = [];

gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDObjectObjects1= [];
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDObjectObjects2= [];
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects1= [];
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects2= [];
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects1= [];
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2= [];
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects1= [];
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects2= [];


gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.mapOfGDgdjs_9546evtsExt_9595_9595StayOnScreen_9595_9595Quit_9546Quit_9546prototype_9546FunctionContext_9546GDBirdObjects2Objects = Hashtable.newFrom({"Bird": gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2});
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.mapOfGDgdjs_9546evtsExt_9595_9595StayOnScreen_9595_9595Quit_9546Quit_9546prototype_9546FunctionContext_9546GDPipeObjects2Objects = Hashtable.newFrom({"Pipe": gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects2});
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.mapOfGDgdjs_9546evtsExt_9595_9595StayOnScreen_9595_9595Quit_9546Quit_9546prototype_9546FunctionContext_9546GDBirdObjects2Objects = Hashtable.newFrom({"Bird": gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2});
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.mapOfGDgdjs_9546evtsExt_9595_9595StayOnScreen_9595_9595Quit_9546Quit_9546prototype_9546FunctionContext_9546GDdown_95959595PipeObjects2Objects = Hashtable.newFrom({"down_Pipe": gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects2});
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects1.length = 0;

gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects1.length = 0;

gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects1_1final.length = 0;
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects1_1final.length = 0;
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Bird"), gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Pipe"), gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.mapOfGDgdjs_9546evtsExt_9595_9595StayOnScreen_9595_9595Quit_9546Quit_9546prototype_9546FunctionContext_9546GDBirdObjects2Objects, gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.mapOfGDgdjs_9546evtsExt_9595_9595StayOnScreen_9595_9595Quit_9546Quit_9546prototype_9546FunctionContext_9546GDPipeObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects1_1final.indexOf(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2[j]) === -1 )
            gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects1_1final.push(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects1_1final.indexOf(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects2[j]) === -1 )
            gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects1_1final.push(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Bird"), gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("down_Pipe"), gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.mapOfGDgdjs_9546evtsExt_9595_9595StayOnScreen_9595_9595Quit_9546Quit_9546prototype_9546FunctionContext_9546GDBirdObjects2Objects, gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.mapOfGDgdjs_9546evtsExt_9595_9595StayOnScreen_9595_9595Quit_9546Quit_9546prototype_9546FunctionContext_9546GDdown_95959595PipeObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects1_1final.indexOf(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2[j]) === -1 )
            gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects1_1final.push(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects1_1final.indexOf(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects2[j]) === -1 )
            gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects1_1final.push(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects1_1final, gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects1);
gdjs.copyArray(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects1_1final, gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects1);
gdjs.copyArray(gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects1_1final, gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.Function = function(Pipe, Bird, down_Pipe, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Pipe": Pipe
, "Bird": Bird
, "down_Pipe": down_Pipe
},
  _objectArraysMap: {
"Object": thisObjectList
, "Pipe": gdjs.objectsListsToArray(Pipe)
, "Bird": gdjs.objectsListsToArray(Bird)
, "down_Pipe": gdjs.objectsListsToArray(down_Pipe)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects1.length = 0;
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDPipeObjects2.length = 0;
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects1.length = 0;
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDBirdObjects2.length = 0;
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects1.length = 0;
gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.GDdown_9595PipeObjects2.length = 0;

gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.FunctionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__StayOnScreen__Quit.Quit.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("StayOnScreen::Quit", gdjs.evtsExt__StayOnScreen__Quit.Quit);
