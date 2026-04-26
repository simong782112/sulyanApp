<template>
    <div>
        aaa
    </div>
</template>

<script>
export default {
    props: ['task'],
    data() {
        return {
            btnwidth: 60,
            scrollStart: 0,
            scrollOffset: 0,
        };
    },
    computed: {
        canswipeleft() {
            return [3,5].indexOf(this.task.status)>-1;
        },
        canswiperight() {
            return [2,6,3,4,5].indexOf(this.task.status)>-1;
        },
    },
    mounted() {
        $(this.$el).parent().css('overflow','hidden');
        this.$el.parentElement.scrollLeft = this.btnwidth;
    },
    updated() {
        let el = this.$el;
        let width = this.btnwidth;
        this.$nextTick(function () {
            el.parentElement.scrollLeft = width;
        })
    },
    methods: {
        onDragged({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
            if (first) {
                this.scrollStart = this.$el.parentElement.scrollLeft;
            } else if (last) {
                if (this.scrollOffset>this.btnwidth/2 && this.canswiperight) {
                    this.$el.parentElement.scrollLeft = this.btnwidth + this.btnwidth;
                    this.moveright();
                } else if (this.scrollOffset<this.btnwidth/-2 && this.canswipeleft) {
                    this.$el.parentElement.scrollLeft = this.btnwidth - this.btnwidth;
                    this.moveleft();
                } else {
                    this.$el.parentElement.scrollLeft = this.btnwidth;
                }
            } else {
                this.scrollOffset = offsetX;
                this.$el.parentElement.scrollLeft = this.btnwidth + offsetX;
            }
        },
        moveleft() {
            let newstatus = 0;
            if (this.task.status==3) {
                // inprogress -> suspended
                newstatus = 4;
            }
            if (this.task.status==5) {
                // readyfortesting -> rejected
                newstatus = 6;
            }
            if (newstatus > 0) {
                this.changestatus(newstatus);
            }
            console.log('swiped right');
        },
        moveright() {
            let newstatus = 0;
            if (this.task.status==2) {
                // new -> inprogress
                newstatus = 3;
            }
            if (this.task.status==3) {
                // inprogress -> readyfortesting
                newstatus = 5;
            }
            if (this.task.status==4) {
                // suspended -> inprogress
                newstatus = 3;
            }
            if (this.task.status==6) {
                // rejected -> inprogress
                newstatus = 3;
            }
            if (this.task.status==5) {
                // readyfortesting -> done
                newstatus = 7;
            }
            if (newstatus > 0) {
                this.changestatus(newstatus);
            }
            console.log('swiped right');
        },
        changestatus(newstatus) {
            let app = this.$root;
            $.post('/tasks/updatestatus',{
                task: this.task.id,
                newstatus: newstatus,
            },function(data){
                if (data && data.success) {
                    app.updatetasks();
                }
                console.log(data);
            });
        },
    },

}
</script>
