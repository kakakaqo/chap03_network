import React, {useEffect} from "react";

/*
    Promise 객체
    - 프로미스는 자바스크립트 비동기 처리에 사용되는 객체
    - 비동기 처리 : 비동기 처리란 '특정 코드의 실행이 완료될 때까지
    기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성'
*/

export default function PromiseTest() {
    useEffect(( )=> {
        new Promise(function (resolve) {
            setTimeout(() => resolve(1), 1000);
        })
        .then(function (result) {
            console.log(result); // 1
            return result + 10;
        }) 
        .then(function (result) {
            console.log(result); // 11
            return result + 20;
        })
        .then(function (result){
            console.log(result); // 31
        });
    }, []);

    return (
        <div>
            <h2>Promise Test</h2>
        </div>
    );
}