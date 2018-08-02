// @flow
import React from 'react';
import { Link as LinkBase, QuotedLink as QuotedLinkBase } from 'tamia';
import { Link as GatbsyLinkBase } from 'gatsby';

type Props = {
	href?: string,
};

const isExternalLink = (href: string): boolean => {
	const protocol = href && href.split(':').shift();
	return protocol === 'https' || protocol === 'http' || protocol === 'mailto';
};

export const GatsbyLink = LinkBase.withComponent(GatbsyLinkBase);
export const QuotedGatsbyLink = QuotedLinkBase.withComponent(GatbsyLinkBase);

export const Link = ({ href, ...props }: Props) =>
	isExternalLink(href) ? (
		<LinkBase href={href} {...props} />
	) : (
		<GatsbyLink to={href} {...props} />
	);

export const QuotedLink = ({ href, ...props }: Props) =>
	isExternalLink(href) ? (
		<QuotedLinkBase href={href} {...props} />
	) : (
		<QuotedGatsbyLink to={href} {...props} />
	);
