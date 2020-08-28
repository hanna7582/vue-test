<template>
    <div>
        <b-input-group prepend="number" class="w-25">
            <b-form-input :value="num" readonly></b-form-input>
            <b-input-group-append>                        
                <b-button @click="increment" variant="info">증가</b-button>        
            </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num:0
        }
    },
    methods: {
        increment(){           
            this.num++;
        }
    },
    //lifeCycle
    beforeCreate() {
        /*
            인스턴스가 방금 초기화 된 후 데이터 관찰 및 이벤트             
        */
        console.log('beforeCreate', '이벤트 라이프 사이클 초기화');            
    },
    created() {
        /*  
            인스턴스가 작성된 후 동기적으로 호출 
            데이터 처리, 계산된 속성(computed), 메서드, 감시/이벤트(watch) 콜백 등과 같은 옵션 처리
            $el 속성 사용 불가
        */
        console.log('created', '화면에 반응성 주입');
    },
    beforeMount() {
        /*         
            render 함수가 처음으로 호출
            특정 화면 요소에 인스턴스를 부착하기 전    
        */
        console.log('beforeMount', 'el, template속성 내용을 render()로 변환');        
    },
    mounted() {
        /*
            가장 많이 사용하는 훅.
            $el, data, computed, methods, watch 등의 모든 요소에 접근 가능
            el이 새로 생성된 vm.$el로 대체된 인스턴스가 마운트 된 직후 호출
            루트 인스턴스가 문서 내의 엘리먼트에 마운트 되어 있으면, mounted가 호출 될 때 vm.$el도 문서 안에 있게 됩니다.
            mounted는 모든 자식 컴포넌트가 마운트 된 상태를 보장하지 않으므로 vm.$nextTick를 사용하면 전체가 렌더링된 상태를 보장
        */
       this.$nextTick(function () {
            // 모든 화면이 렌더링된 후 실행
            console.log('mounted', '$el 접근',this.$el);        
        })
    },
    beforeUpdate() {
        /*
            데이터가 변경되면, 가상 DOM 재 렌더링과 패치가 이뤄지기 전에 호출
            이 훅에서 더 많은 상태 변경을 수행할 수 있으며 추가로 재 렌더링을 트리거하지 않습니다.
        */
        console.log('beforeUpdate', '인스턴스의 데이터 변경');      
    },
    updated() {
        /* 
            데이터가 변경되어 가상 DOM이 재 렌더링되고 패치되면 호출
            이 훅이 호출되면 엘리먼트의 DOM이 업데이트 된 상태가 되어 이 훅에서 DOM 종속적인 연산 가능. 
            그러나 대부분의 경우 무한루프가 발생할 수 있으므로 훅에서 상태를 변경하면 안됨.
            상태 변화에 반응하기 위해서 계산된 속성 또는 감시자(#watch)사용을 권장
            updated는 모든 자식 컴포넌트가 재-렌더링 된 상태를 보장하지 않으므로 vm.$nextTick를 사용하면 전체가 업데이트된 상태를 보장
        */
        this.$nextTick(function () {
            // 모든 화면이 재 렌더링된 후 실행
            console.log('updated','화면 재 렌더링 및 데이터 갱신');      
        })
    },
    activated() {
        /*
            keep-alive 인 컴포넌트가 활성화 될 때 호출
            keep-alive는 주로 컴포넌트 상태를 보존하거나 재 렌더링을 피하는데 사용
            keep-alive 사용시 beforeCreate, created, beforeMount, mounted는 최초 한번만 사용 
                             beforeDestroy, destroyed는 사용하지 않는다.
        */        
        console.log('activated','활성화');  
    },
    deactivated() {
        // keep-alive인 컴포넌트가 비활성화 될 때 호출
        console.log('deactivated','비활성화');  
    },
    //keep-alive사용시 아래 두개의 훅은 발생되지 않음
    beforeDestroy() {
        /* 
            Vue 인스턴스가 제거되기 전에 호출됩
            인스턴스는 아직 완벽하게 작동
            이벤트 리스너를 해제하는 등 인스턴스가 사라지기 전에 해야할 일들을 처리
        */
        console.log('beforeDestroy','인스턴스 접근 가능'); 
    },
    destroyed() {
        /*
            Vue 인스턴스가 제거된 후 호출 
            이 훅이 호출되면 Vue 인스턴스의 모든 디렉티브가 바인딩 해제 되고 모든 이벤트 리스너가 제거되며 모든 하위 Vue 인스턴스도 삭제됩니다.
        */

        console.log('destroyed', '컴포넌트, 인스턴스, 디렉티브 해제'); 
    },
    errorCaptured: (err, vm, info) => {
        /*
            자손 컴퍼넌트로부터의 에러가 캡처되었을 때 
            오류를 트리거 한 컴포넌트 인스턴스 및 오류가 캡처된 위치에 대한 정보가 들어있는 문자열의 세 가지 전달인자를 받는다. 
            훅은 false를 반환하여 오류가 더 전파되지 않도록 할 수 있음.
        */
        console.log('errorCaptured', err, vm, info); 
    },
}
</script>

<style>
    
</style>