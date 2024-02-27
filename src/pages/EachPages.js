import React from 'react';
import TextBlock from "./TextBlock";

const EachPages = ({page}) =>{
    let nowPageContent = <div/>;

    switch (page) {
        case 1:
            nowPageContent = <div>
                    <div className="title">獨立開發遊戲—大學生活模擬器</div>
                    <div style={{marginLeft: '540px', fontWeight: "bold"}}>作者：千羽</div>
                    <div className="blockline" style={{marginTop: '3px'}}/>
                    <TextBlock title="作者的話"
                               text={["大家好我是千羽,目前就讀於交通大學一年級,這次要分享的是我這學期製作的小遊戲—大學生活模擬器。",
                               "這個遊戲就如同名字一樣,是我結合在大學生活的感觸與經驗而孕育出的產物,也是我在獨立遊戲開發上的處女作。對於正在看這篇文章的你,不管是遊戲也好現實也好,希望大家能夠仔細思考,做出不讓自己後悔的決定,過一個好的人生!"]}
                               img="/ClubJournal/pic/senba.png" size="135px" mode={2} mark={1}/>
                    <div className="blockline"/>
                    <TextBlock title="遊戲介紹"
                               text={["這個遊戲是一個大學模擬遊戲,以文字劇情冒險遊戲的形式進行。遊戲總共會有十六周,為了縮短遊戲進行時間,每週只會有一天,而每天又會被分為早、中、晚三個時段,玩家可以遵從自己想法與喜好,決定每次的行動要做什麼。"]}
                               img="/ClubJournal/pic/2.png" mode={1} mark={1}/>
                    <div className="blockline"/>
                    <TextBlock title="遊戲玩法"
                               text={["遊戲的最終目標為「期末考試」以及「專題探索」兩個課題,分別對應到了「學習力」與「技術力」。玩家需要在有限的時間內盡可能提高自己的能力值,以確保在最後的結算階段能夠取得合格,成功的通過一個或是兩個課題。",
                               "達成遊戲目標固然重要,不過值得注意的是,每當玩家進行學習或是出遊等動作時,會導致睡眠值或心情值發生變化,如果不慎讓這些數值歸零,有可能會走向不好的結果,所以請務必要妥善的分配每天的行程。"]}
                               mode={2} mark={1}/>
                    <div className="blockline"/>
                    <TextBlock title="突發事件"
                               text={["隨著時間經過,除了每天的例行行程外,遊戲中存在著幾個固定事件與突發事件,像是在第四天下午會有社團活動,第八天會出現班級競賽,外出時機率觸發臨時狀況等,這些事件可能會大幅的影響遊戲結局,盡可能小心謹慎的選擇才是上策。"]}
                               img="/ClubJournal/pic/3.png" mode={1} mark={1}/>
                    <div className="blockline"/>
                </div>;
            break;
        case 2:
            nowPageContent = <div>
                <div style={{paddingTop: '30px'}}/>
                <TextBlock title="結局路線"
                           text={["遊戲共有五個,分別是一個真結局,兩個普通結局,與兩個壞結局,會根據玩家的四項數值與最後所選的選項發生變化。其中,真結局的選項需要玩家在兩項數值都提升到一定程度時才會被解鎖,需要縝密的計算,均衡的提升各項數值。"]}
                           img="/ClubJournal/pic/5.png" mode={1} mark={1}/>
                <div className="blockline"/>
                <img src="/ClubJournal/pic/nagare.png" alt="" style={{width: '580px', margin: '20px 0 20px 52px'}}
                     id="nagare"/>
                <br/>
                <div style={{marginLeft: '230px'}} className="pictext">遊戲（部分）流程圖</div>
                <div className="blockline" style={{marginTop: '30px'}}/>
                <div className="flexbox">
                    <div>
                        <img src="/ClubJournal/pic/gamelink.png" alt=""
                             style={{width: '300px', marginLeft: '40px', marginTop: '0px'}}/><br/>
                    </div>
                    <div>
                        <img src="/ClubJournal/pic/chara.png" alt="" style={{width: '200px', marginLeft: '-10px'}}/>
                        <img src="/ClubJournal/pic/chara2.png" alt="" style={{width: '200px', marginLeft: '-50px'}}/>
                    </div>
                </div>
                <div className="flexbox" style={{marginTop: "3px"}}>
                    <div style={{marginLeft: '142px'}} className="pictext">遊戲連結</div>
                    <div style={{marginLeft: '37px'}} className="pictext">角色心情差分圖</div>
                </div>
            </div>;
            break;
        case 3:
            nowPageContent = <div>
                <div className="title">Love Live! 虹咲學園學園偶像同好會</div>
                <div className="title" style={{paddingTop: '0px', marginBottom: '8px'}}>同人二創小遊戲</div>
                <div style={{
                    position: "absolute",
                    top: '105px',
                    right: '55px',
                    fontWeight: "bold",
                    textDecoration: "underline"
                }}>作者：千羽
                </div>
                <div style={{display: "flex", justifyContent: "center", marginBottom: '35px'}}>
                    <img src="/ClubJournal/pic/nijigakugo/nijigaku.png" alt="" style={{width: '580px'}}/>
                </div>
                <TextBlock title="遊戲介紹"
                           text={["這是一款基於知名動畫Lovelive的旗下企劃:虹咲學園學園偶像同好會所製作的粉絲向二創遊戲。",
                           "這個遊戲的架構採類似派對遊戲的概念,以製作多個輕便、快速的小關卡為主,再將這些關卡都統整在一起,讓玩家能夠在短時間內享受到各關的趣味。",
                               "遊戲中每個關卡都是參考「虹咲學園」動畫中角色的趣事或性格而製作，並且附有簡短的遊玩說明,希望讓虹咲的粉絲在遊玩時能夠會心一笑,讓先前不知道虹咲的玩家在遊玩後也能夠更加認識這個企劃。"]}
                           mode={1}  mark={1}/>
                <div className="blockline"/>
                <TextBlock title="遊戲概要與玩法"
                           text={["此遊戲是多個小遊戲組成的複合式遊戲,依關卡需求玩家需要在滑鼠與鍵盤間做切換。",
                           "遊戲採關卡式，關卡為亂數分配，且在輪完一輪前並不會分配到已經玩過的關卡。",
                           "各關卡風格以簡單快速的設計為主軸,玩家須在極短時間（大約5±3秒）內完成關卡要求的目標。",
                           "每次遊玩都會有三點生命值,每小關失敗會扣除一點,直到生命值為零時遊戲結束。",
                           "在遊玩過程中,遊戲難度會隨著完成關卡的數量提升（EX：提升速度、減少關卡秒數）。",
                           "遊戲中每四關會迎接BOSS關卡,BOSS關卡與普通關卡較為不同,更考驗玩家的思考與操作。"]}
                           mode={1} mark={2} height="210px"/>
            </div>
            break;
        case 4:
            nowPageContent = <div style={{paddingTop: '35px'}}>
                <TextBlock
                    text={["遊戲目前共有十關,分別是八個普通關卡與兩個BOSS關卡,每關都有獨特的玩法與豐富的角色插圖、場景美術。"]}
                    mode={1} mark={1} height="330px"/>
                <div style={{position: "absolute", top: '25px', left: '40px'}}>
                    <img src="/ClubJournal/pic/nijigakugo/chara.png" alt="" style={{width: '450px'}}/>
                </div>
                <div style={{position: "absolute", top: '235px', left: '40px'}}>
                    <img src="/ClubJournal/pic/nijigakugo/bg2.png" alt="" style={{width: '220px', marginRight: '20px'}}/>
                    <img src="/ClubJournal/pic/nijigakugo/bg.png" alt="" style={{width: '220px'}}/>
                </div>
                <div className="blockline"/>
                <TextBlock title="AyumuCatch關卡介紹" text={["「大家，我回來了」,台上的少女如此說著。與臉上開心的笑容成對比,在那背後卻像是一副寂寞的表情,似乎在等待著什麼。正當大家仍對此感到疑惑,「歡迎回來!」的話音還未落下 ,取而代之的是從天而降的迷之飛碟,與那不知從何萌生的執念與重力場。",
                "那天,少女乘上飛碟,誓言要取回自己重要的事物,為了不再次失去,只有這次一定要緊緊抓住她的心。請你協助步夢操控她的飛碟,奪回侑醬散落在每個人心中的笑容與愛,讓她成為只屬於步夢的青梅竹馬。"]}
                           img = "/ClubJournal/pic/nijigakugo/ayumucatch.png" size="200px"
                           mode={2} mark={1} height="215px"/>
                <div className="blockline"/>
                <div className="flexbox" style={{marginTop: '32px'}}>
                    <div>
                        <img src="/ClubJournal/pic/nijigakugo/gamelink.png" alt=""
                             style={{height: '200px', marginLeft: '55px', marginTop: '0px'}}/><br/>
                    </div>
                    <div>
                        <img src="/ClubJournal/pic/nijigakugo/gamescene.png" alt=""
                             style={{height: '185px', marginLeft: '-40px', marginTop: '8px'}}/>
                    </div>
                </div>
                <div className="flexbox" style={{marginTop: "10px"}}>
                    <div style={{marginLeft: '107px'}} className="pictext">遊戲連結</div>
                    <div style={{marginLeft: '8px'}} className="pictext">實際遊玩畫面</div>
                </div>
            </div>
            break;
        default:
            break;
    }
    return (
        <div className="eachpage">
            <div className="paper">
                {nowPageContent}
            </div>
        </div>
    );
}

export default EachPages;