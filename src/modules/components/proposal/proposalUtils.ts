import type { TagVariant } from '../../../core';

export enum ProposalStatus {
    ACCEPTED = 'ACCEPTED',
    ACTIVE = 'ACTIVE',
    CHALLENGED = 'CHALLENGED',
    DRAFT = 'DRAFT',
    EXECUTED = 'EXECUTED',
    EXPIRED = 'EXPIRED',
    FAILED = 'FAILED',
    PARTIALLY_EXECUTED = 'PARTIALLY_EXECUTED',
    PENDING = 'PENDING',
    EXECUTABLE = 'EXECUTABLE',
    REJECTED = 'REJECTED',
    VETOED = 'VETOED',
}

export enum ProposalVotingStatus {
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED',
    UNREACHED = 'UNREACHED',
}

export const proposalStatusToVotingStatus: Record<ProposalStatus, ProposalVotingStatus> = {
    [ProposalStatus.ACCEPTED]: ProposalVotingStatus.ACCEPTED,
    [ProposalStatus.ACTIVE]: ProposalVotingStatus.ACTIVE,
    [ProposalStatus.CHALLENGED]: ProposalVotingStatus.ACTIVE,
    [ProposalStatus.DRAFT]: ProposalVotingStatus.PENDING,
    [ProposalStatus.EXECUTED]: ProposalVotingStatus.ACCEPTED,
    [ProposalStatus.EXPIRED]: ProposalVotingStatus.ACCEPTED,
    [ProposalStatus.FAILED]: ProposalVotingStatus.ACCEPTED,
    [ProposalStatus.PARTIALLY_EXECUTED]: ProposalVotingStatus.ACCEPTED,
    [ProposalStatus.PENDING]: ProposalVotingStatus.PENDING,
    [ProposalStatus.EXECUTABLE]: ProposalVotingStatus.ACTIVE,
    [ProposalStatus.REJECTED]: ProposalVotingStatus.REJECTED,
    [ProposalStatus.VETOED]: ProposalVotingStatus.ACTIVE,
};

export const proposalStatusToTagVariant: Record<ProposalStatus, TagVariant> = {
    [ProposalStatus.ACCEPTED]: 'success',
    [ProposalStatus.ACTIVE]: 'info',
    [ProposalStatus.CHALLENGED]: 'warning',
    [ProposalStatus.DRAFT]: 'neutral',
    [ProposalStatus.EXECUTED]: 'success',
    [ProposalStatus.EXPIRED]: 'critical',
    [ProposalStatus.FAILED]: 'critical',
    [ProposalStatus.PARTIALLY_EXECUTED]: 'warning',
    [ProposalStatus.PENDING]: 'neutral',
    [ProposalStatus.EXECUTABLE]: 'info',
    [ProposalStatus.REJECTED]: 'critical',
    [ProposalStatus.VETOED]: 'warning',
};
