export class TaskStageDetail{
    constructor(index,stageName,stageStatus,stageDesc){
        this.index = index;
        this.stageName = stageName;
        this.stageStatus = stageStatus;
        this.stageDesc = stageDesc;
    }
    isNormal(){
        if(this.stageStatus === "PROCESS" || this.stageStatus === "SUCCESS"){
            return true;
        }else if(this.stageStatus === "STOPPED" || this.stageStatus === "FAILED"){
            return false;
        }
    }
}
export class TaskStageResult{

}
export class TaskStageAnalyzer{
    constructor(){}
    static doAnalysis(stages){
        let stageStatus = "process";
        let index = 0;
        for(let i=0;i<stages.length;i++){
            let stage = stages[i];
            index = i;
            if(!stage.stageStatus){
                index = (i-1);
                break;
            }
            if(!stage.isNormal()){
                stageStatus = "error";
                break;
            }
        }
        if(index === (stages.length -1) && stageStatus === "process"){
            stageStatus = "finish"
        }
        let result = {
            "currentStatus" : stageStatus,
            "currentIndex" : index
        };
        return result;
    }
}