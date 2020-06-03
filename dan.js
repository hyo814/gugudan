//fetch() 함수는 URL 을 인자로 받고 응답을 처리하기 위한 promise 를 반환합니다. 응답을 처리할 때 Response 객체를 이용할 수 있습니다.
const multiply = (dan) => { //함수 multiply 에서 dan이라는 key를 받아서 간다.
    let point
    fetch('https://fan.catholic.ac.kr:5000/multi?dan=' + dan, {
            method: 'GET',
            //get 방식: 주소창에 입력이 된 모습이 보여져도 상관이 없는 케이스의 경우 할 수 있었다. 하지만 서류에서는 멀티로 되어 있지 않은 상태였어서 왜 멀티가 붙었는지는 모르겠다( 참고 자료 사용)
        })
        .then(response => response.json()
            .then(data => {
                let text = ""//text 함수? 선언을 했지만 빈 여백부터 시작
                for (let i = 0; i < 9; i++) { //1부터 9까지의 구구단이 출력, 반복 되는 for 문의 형식으로
                    text += data[i] + "<br>" // text 마다 곱셈이 끝나면 다음줄로 내려갈 수 있도록 체크
                }
                document.getElementById("here").innerHTML = text // span에서 id를 입력 받아서 html 안으로 입력을 하도록 한다.
            }))
        .catch(error => console.log(error));
}
