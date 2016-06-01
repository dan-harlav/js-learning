$(function() {
    $('body').delegate('div.timebox', 'click', function() {
        $(this).timerize({ maxTime: 5 });
    });
});

(function($) {

    var TimerBox = function($el, options) {
        var self = this;
        self.$el = $el;
        self.options = $.extend({}, options);
        self.initialize();
    };

    TimerBox.prototype.options = { maxTime: 5 };

    TimerBox.prototype.initialize = function() {
        var self = this;
        self.timerValue = (typeof self.options.timer != 'number') ? Math.floor((Math.random() * self.options.maxTime) + 1) * 60 * 10 : self.options.timer * 60;
        self.$el.html(self.timerValue / 600);
        self.runCounter();
    };

    TimerBox.prototype.runCounter = function() {
        var self = this;
        self.elapsed = 0;
        self.counter = setInterval(function() {
            if (self.elapsed * 600 == self.timerValue) {
                clearInterval(self.counter);
            }
            self.$el.html(self.elapsed);
            self.elapsed++;
        }, 600);
    }

    TimerBox.prototype.printResult = function(self) {
        self.$el.html(self.timerValue / 600);
    }

    $.fn.timerize = function(options) {
        new TimerBox(this, options);
    };

})(window.jQuery);
