gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDFryderykObjects1= [];
gdjs.Untitled_32sceneCode.GDFryderykObjects2= [];
gdjs.Untitled_32sceneCode.GDPod_95322oga_9595lewoObjects1= [];
gdjs.Untitled_32sceneCode.GDPod_95322oga_9595lewoObjects2= [];
gdjs.Untitled_32sceneCode.GDMostObjects1= [];
gdjs.Untitled_32sceneCode.GDMostObjects2= [];
gdjs.Untitled_32sceneCode.GD_9595_95347rodekObjects1= [];
gdjs.Untitled_32sceneCode.GD_9595_95347rodekObjects2= [];
gdjs.Untitled_32sceneCode.GDSpikesObjects1= [];
gdjs.Untitled_32sceneCode.GDSpikesObjects2= [];
gdjs.Untitled_32sceneCode.GDGoldCoinObjects1= [];
gdjs.Untitled_32sceneCode.GDGoldCoinObjects2= [];
gdjs.Untitled_32sceneCode.GDWynik_9595textObjects1= [];
gdjs.Untitled_32sceneCode.GDWynik_9595textObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDFryderykObjects1Objects = Hashtable.newFrom({"Fryderyk": gdjs.Untitled_32sceneCode.GDFryderykObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGoldCoinObjects1Objects = Hashtable.newFrom({"GoldCoin": gdjs.Untitled_32sceneCode.GDGoldCoinObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fryderyk"), gdjs.Untitled_32sceneCode.GDFryderykObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFryderykObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFryderykObjects1[i].getVariableString(gdjs.Untitled_32sceneCode.GDFryderykObjects1[i].getVariables().getFromIndex(0)) == "" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFryderykObjects1[k] = gdjs.Untitled_32sceneCode.GDFryderykObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFryderykObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fryderyk"), gdjs.Untitled_32sceneCode.GDFryderykObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs.Untitled_32sceneCode.GDGoldCoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDFryderykObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGoldCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGoldCoinObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGoldCoinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGoldCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "4e9ac27bcc5fd56b14a5f47eb87de7bc61bccb49e683cf51f1349015c700d7c5_Coins 10.aac", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Wynik_text"), gdjs.Untitled_32sceneCode.GDWynik_9595textObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWynik_9595textObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWynik_9595textObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fryderyk"), gdjs.Untitled_32sceneCode.GDFryderykObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFryderykObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFryderykObjects1[i].getY() > 540 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFryderykObjects1[k] = gdjs.Untitled_32sceneCode.GDFryderykObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFryderykObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDFryderykObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFryderykObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFryderykObjects1[i].setPosition(200,275);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fryderyk"), gdjs.Untitled_32sceneCode.GDFryderykObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDFryderykObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDFryderykObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDFryderykObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFryderykObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPod_95322oga_9595lewoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPod_95322oga_9595lewoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMostObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMostObjects2.length = 0;
gdjs.Untitled_32sceneCode.GD_9595_95347rodekObjects1.length = 0;
gdjs.Untitled_32sceneCode.GD_9595_95347rodekObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpikesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpikesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoldCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoldCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWynik_9595textObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWynik_9595textObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
