define(function(require, exports, module) {
    var tpl = require('text!modules/qjsq/detail/crz.html');
    var api = require('api');

    return function() {
        var page = {
            template: tpl,
            data: function() {
                return {
                	XM: "",
                    YX:"",
                    BJ:"",
                    XH:"",
                    YXQ:"",
                    XSBH:"",
                    photoUrl:api.getAuthPhoto(this.$route.query.XSBH),
                	YXQ1: "",
					YXQ2: "",
					QJSY: "",
					SSH: "",
					SHR: "",
					SHSJ: "",
					SHYJ: "",
                };
            },
            created: function() {
                SDK.setTitleText("出入证");
                this.XM = this.$route.query.XM;
                this.YX = this.$route.query.YX;
                this.BJ = this.$route.query.BJ;
                this.XH = this.$route.query.XH;
                this.YXQ = this.$route.query.YXQ;
                this.XSBH = this.$route.query.XSBH;
                this.XB = this.$route.query.XB;
                this.MZ = this.$route.query.MZ;
                this.NJ = this.$route.query.NJ;
                this.ZY = this.$route.query.ZY;
                this.QJSY = this.$route.query.QJSY;
                this.SSH = this.$route.query.SSH;
                this.SHR = this.$route.query.SHR;
                this.SHSJ = this.$route.query.SHSJ;
                this.SHYJ = this.$route.query.SHYJ;
            },
            mounted: function(){
				this.YXQ1 = this.YXQ.split("至")[0] + " 至 ";
				this.YXQ2 = this.YXQ.split("至")[1];
			},
            methods: {
            }
        };
        return page;
    };
    

});