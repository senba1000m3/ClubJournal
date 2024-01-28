import React from 'react';
import TextBlock from "./TextBlock";

const EachPages = ({page}) =>{
    let nowPageContent = <div/>;
    console.log(process.env.PUBLIC_URL);
    switch (page) {
        case 1:
            nowPageContent = <div>
                    <div className="title">獨立開發遊戲—大學生活模擬器</div>
                    <div className="blockline"/>
                    <TextBlock title="作者的話"
                               text="&emsp;&emsp;大家好我是千羽,目前就讀於交通大學一年級,這次要分享的是我這學期製作的小遊戲—大學生活模擬器。"
                               text2="&emsp;&emsp;這個遊戲就如同名字一樣,是我結合在大學生活的感觸與經驗而孕育出的產物,也是我在獨立遊戲開發上的處女作。對於正在看這篇文章的你,不管是遊戲也好現實也好,希望大家能夠仔細思考,做出不讓自己後悔的決定,過一個好的人生!"
                               img="/ClubJournal/pic/senba.png" mode={2}/>
                    <div className="blockline"/>
                    <TextBlock title="遊戲介紹"
                               text="&emsp;&emsp;這個遊戲是一個大學模擬遊戲,以文字劇情冒險遊戲的形式進行。遊戲總共會有十六周,為了縮短遊戲進行時間,每週只會有一天,而每天又會被分為早、中、晚三個時段,玩家可以遵從自己想法與喜好,決定每次的行動要做什麼。"
                               img="/ClubJournal/pic/2.png" mode={1}/>
                    <div className="blockline"/>
                    <TextBlock title="遊戲玩法"
                               text="&emsp;&emsp;遊戲的最終目標為「期末考試」以及「專題探索」兩個課題,分別對應到了「學習力」與「技術力」。玩家需要在有限的時間內盡可能提高自己的能力值,以確保在最後的結算階段能夠取得合格,成功的通過一個或是兩個課題。"
                               text2="&emsp;&emsp;達成遊戲目標固然重要,不過值得注意的是,每當玩家進行學習或是出遊等動作時,會導致睡眠值或心情值發生變化,如果不慎讓這些數值歸零,有可能會走向不好的結果,所以請務必要妥善的分配每天的行程。"
                               mode={2}/>
                    <div className="blockline"/>
                    <TextBlock title="突發事件"
                               text="&emsp;&emsp;隨著時間經過,除了每天的例行行程外,遊戲中存在著幾個固定事件與突發事件,像是在第四天下午會有社團活動,第八天會出現班級競賽,外出時機率觸發臨時狀況等,這些事件可能會大幅的影響遊戲結局,盡可能小心謹慎的選擇才是上策。"
                               img="/ClubJournal/pic/3.png" mode={1}/>
                    <div className="blockline"/>
                </div>;
            break;
        case 2:
            nowPageContent = <div>
                <div style={{paddingTop: '30px'}}/>
                <TextBlock title="結局路線"
                           text="&emsp;&emsp;遊戲共有五個,分別是一個真結局,兩個普通結局,與兩個壞結局,會根據玩家的四項數值與最後所選的選項發生變化。其中,真結局的選項需要玩家在兩項數值都提升到一定程度時才會被解鎖,需要縝密的計算,均衡的提升各項數值。"
                           img="/ClubJournal/pic/5.png" mode={1}/>
                <div className="blockline"/>
                <img src="/ClubJournal/pic/nagare.png" style={{width: '560px', marginLeft: '62px', marginTop: '6px'}}
                     id="nagare"/>
                <br/>
                <div style={{marginLeft: '240px'}} className="pictext">遊戲（部分）流程圖</div>
                <div className="blockline" style={{marginTop: '24px'}}/>
                <div className="flexbox">
                    <div>
                        <img src="/ClubJournal/pic/gamelink.png"
                             style={{width: '280px', marginLeft: '48px', marginTop: '-10px'}}/><br/>
                    </div>
                    <div>
                        <img src="/ClubJournal/pic/chara.png" style={{width: '180px', marginLeft: '5px'}}/>
                        <img src="/ClubJournal/pic/chara2.png" style={{width: '180px', marginLeft: '-50px'}}/>
                    </div>
                </div>
                <div className="flexbox">
                    <div style={{marginLeft: '115px'}} className="pictext">遊戲 QRCode</div>
                    <div style={{marginLeft: '52px'}} className="pictext">角色差分圖</div>
                </div>
            </div>;
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