gdjs.GameCode = {};
gdjs.GameCode.GDWallsObjects1= [];
gdjs.GameCode.GDWallsObjects2= [];
gdjs.GameCode.GDBlockObjects1= [];
gdjs.GameCode.GDBlockObjects2= [];
gdjs.GameCode.GDBouncerObjects1= [];
gdjs.GameCode.GDBouncerObjects2= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDVerObjects1= [];
gdjs.GameCode.GDVerObjects2= [];
gdjs.GameCode.GDInfoTextObjects1= [];
gdjs.GameCode.GDInfoTextObjects2= [];


gdjs.GameCode.mapOfEmptyGDInfoTextObjects = Hashtable.newFrom({"InfoText": []});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.GameCode.GDBlockObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBouncerObjects1Objects = Hashtable.newFrom({"Bouncer": gdjs.GameCode.GDBouncerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.GameCode.GDBlockObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallsObjects1Objects = Hashtable.newFrom({"Walls": gdjs.GameCode.GDWallsObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.GameCode.GDBlockObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.GameCode.GDBlockObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.GameCode.GDBlockObjects1});
gdjs.GameCode.mapOfEmptyGDBlockObjects = Hashtable.newFrom({"Block": []});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.GameCode.GDBlockObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBouncerObjects1Objects = Hashtable.newFrom({"Bouncer": gdjs.GameCode.GDBouncerObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.GameCode.GDBlockObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlockObjects1[i].getBehavior("Physics2").setStatic();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDInfoTextObjects) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8088972);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.GameCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.GameCode.GDInfoTextObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\bg.wav", true, 50, 1);
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.GameCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlockObjects1[i].getBehavior("Physics2").setDynamic();
}
}{for(var i = 0, len = gdjs.GameCode.GDInfoTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoTextObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bouncer"), gdjs.GameCode.GDBouncerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBouncerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBouncerObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 128);
}
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "Glitch", "blueX", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "Glitch", "greenX", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "Glitch", "redX", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "Glitch", "offset", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "Glitch", "slices", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "CRT", "noise", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.GameCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bouncer"), gdjs.GameCode.GDBouncerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects, "Physics2", gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBouncerObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9336524);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\bounce.wav", false, 100, gdjs.randomFloatInRange(0.5, 2));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.GameCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Walls"), gdjs.GameCode.GDWallsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects, "Physics2", gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallsObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9033876);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\bounce.wav", false, 100, gdjs.randomFloatInRange(0.5, 2));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.GameCode.GDBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects, "Physics2", gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9445452);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\bounce.wav", false, 100, gdjs.randomFloatInRange(0.5, 2));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 5;
if (isConditionTrue_0) {
gdjs.GameCode.GDBlockObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects, gdjs.randomInRange(246, 1087), -(256), "");
}{for(var i = 0, len = gdjs.GameCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlockObjects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.GameCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlockObjects1[i].getBehavior("Resizable").setSize(128, 128);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.GameCode.GDBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBlockObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBlockObjects1[i].getY() > 720 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBlockObjects1[k] = gdjs.GameCode.GDBlockObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBlockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBlockObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(5);
}{for(var i = 0, len = gdjs.GameCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlockObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "Glitch", "slices", 1000);
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(60);
}{runtimeScene.getScene().getVariables().getFromIndex(3).sub(60);
}{runtimeScene.getScene().getVariables().getFromIndex(4).add(60);
}{runtimeScene.getScene().getVariables().getFromIndex(5).add(120);
}{runtimeScene.getScene().getVariables().getFromIndex(6).add(600);
}{runtimeScene.getScene().getVariables().getFromIndex(7).add(0.6);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\glitch.wav", false, 50, gdjs.randomFloatInRange(0, 1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 10;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) < 10;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) > 2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).sub(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) > 4;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) > 10;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).sub(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) > 0.4;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).sub(0.025);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDBlockObjects) < 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.GameCode.GDBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bouncer"), gdjs.GameCode.GDBouncerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlockObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBouncerObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBlockObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlockObjects1[i].getBehavior("Physics2").setLinearVelocityY(500);
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDWallsObjects1.length = 0;
gdjs.GameCode.GDWallsObjects2.length = 0;
gdjs.GameCode.GDBlockObjects1.length = 0;
gdjs.GameCode.GDBlockObjects2.length = 0;
gdjs.GameCode.GDBouncerObjects1.length = 0;
gdjs.GameCode.GDBouncerObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDVerObjects1.length = 0;
gdjs.GameCode.GDVerObjects2.length = 0;
gdjs.GameCode.GDInfoTextObjects1.length = 0;
gdjs.GameCode.GDInfoTextObjects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
