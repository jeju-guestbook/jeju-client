function listShuffle(array: any[]) {
  const newArray: any[] = array.slice(); // 배열 복사
  let currentIndex = newArray.length,
    temporaryValue,
    randomIndex;

  // 배열이 모두 처리될 때까지 계속
  while (currentIndex !== 0) {
    // 남아있는 요소 중에서 랜덤한 요소를 선택
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // 현재 요소와 랜덤 요소를 교환
    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
}

export default listShuffle;
