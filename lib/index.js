'use babel';

export default {
    toolBar: null,

    activate: function(state) {},

    deactivate: function() {
        return this.toolBar != null ? this.toolBar.removeItems() : void 0;
    },

    consumeToolBar: function(toolBar) {
        let config = atom.config.get('tool-bar-config') || [];
        this.toolBar = toolBar('tool-bar-config');

        config.forEach(icon => {
            if (icon.icon === 'spacer') {
                this.toolBar.addSpacer();
            } else {
                this.toolBar.addButton({
                    icon: icon.icon,
                    callback: icon.callback,
                    tooltip: icon.title,
                    iconset: icon.iconSet
                });
            }
        })
    }
}
