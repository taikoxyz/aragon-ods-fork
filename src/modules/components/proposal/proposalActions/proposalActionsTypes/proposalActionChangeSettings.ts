import { type IProposalAction } from './proposalAction';

export interface IProposalActionChangeSettingsSetting {
    /**
     * The term of the setting.
     */
    term: string;
    /**
     * The definition of the setting.
     */
    definition: string | number;
}

export interface IProposalActionChangeSettings extends IProposalAction {
    /**
     * The settings that are proposed to be changed
     */
    proposedSettings: IProposalActionChangeSettingsSetting[];
    /**
     * The settings that are currently in place.
     */
    existingSettings: IProposalActionChangeSettingsSetting[];
}
