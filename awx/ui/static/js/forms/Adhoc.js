/*********************************************
 *  Copyright (c) 2015 AnsibleWorks, Inc.
 *
 *  Adhoc.js
 *  Form definition for the Adhoc model.
 *
 */
 /**
 * @ngdoc function
 * @name forms.function:Adhoc
 * @description This form is for executing an adhoc command
*/

export default
    angular.module('AdhocFormDefinition', [])
        .value('AdhocForm', {
            editTitle: 'Execute Command',
            name: 'adhoc',
            well: true,
            forceListeners: true,

            fields: {
                module_name: {
                    label: 'Module',
                    excludeModal: true,
                    type: 'select',
                    ngOptions: 'module.label for module in adhoc_module_options' +
                        ' track by module.value',
                    ngChange: 'moduleChange()',
                    editRequired: true,
                    awPopOver:'<p>These are the modules that Tower supports ' +
                        'running commands against.',
                    dataTitle: 'Module',
                    dataPlacement: 'right',
                    dataContainer: 'body'
                },
                module_args: {
                    label: 'Arguments',
                    type: 'text',
                    awPopOverWatch: 'argsPopOver',
                    awPopOver: 'See adhoc controller...set as argsPopOver',
                    dataTitle: 'Arguments',
                    dataPlacement: 'right',
                    dataContainer: 'body',
                    editRequired: false,
                    autocomplete: false
                },
                limit: {
                    label: 'Host Pattern',
                    type: 'text',
                    addRequired: false,
                    editRequired: false,
                    awPopOver: '<p>The pattern used to target hosts in the ' +
                        'inventory. Leaving the field blank, all, and * will ' +
                        'all target all hosts in the inventory.  You can find ' +
                        'more information about Ansible\'s host patterns ' +
                        '<a id=\"adhoc_form_hostpatterns_doc_link\"' +
                        'href=\"http://docs.ansible.com/intro_patterns.html\" ' +
                        'target=\"_blank\">here</a>.</p>',
                    dataTitle: 'Host Pattern',
                    dataPlacement: 'right',
                    dataContainer: 'body'
                },
                credential: {
                    label: 'Machine Credential',
                    type: 'lookup',
                    sourceModel: 'credential',
                    sourceField: 'name',
                    ngClick: 'lookUpCredential()',
                    class: 'squeeze',
                    awPopOver: '<p>Select the credential you want to use when ' +
                        'accessing the remote hosts to run the command. ' +
                        'Choose the credential containing ' +
                        'the username and SSH key or password that Ansbile ' +
                        'will need to log into the remote hosts.</p>',
                    dataTitle: 'Credential',
                    dataPlacement: 'right',
                    dataContainer: 'body',
                    awRequiredWhen: {
                        variable: 'credRequired',
                        init: 'false'
                    }
                },
                become_enabled: {
                    label: 'Enable Become for Credential',
                    type: 'checkbox',
                    editRequired: false
                    // awPopOver: '<p>If checked, user will be become the user ' +
                    //     'specified by the credential.</p>',
                    // dataPlacement: 'right',
                    // dataTitle: 'Enable Become for Credential',
                    // dataContainer: 'body'
                },
                verbosity: {
                    label: 'Verbosity',
                    excludeModal: true,
                    type: 'select',
                    ngOptions: 'verbosity.label for verbosity in ' +
                        'adhoc_verbosity_options ' +
                        'track by verbosity.value',
                    editRequired: true,
                    awPopOver:'<p>These are the verbosity levels for standard ' +
                        'out of the command run that are supported.',
                    dataTitle: 'Module',
                    dataPlacement: 'right',
                    dataContainer: 'body'
                }
            },

            buttons: {
                launch: {
                    label: 'Launch',
                    ngClick: 'launchJob()',
                    ngDisabled: true
                },
                reset: {
                    ngClick: 'formReset()',
                    ngDisabled: true
                }
            },

            related: {}
        });