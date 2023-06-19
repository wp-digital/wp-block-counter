import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Button,
	Icon,
	Flex,
	FlexItem,
	Modal,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { chunk, has } from 'lodash';

export default function IconsPicker(props) {
	const { label, icons, value, onChange } = props;
	const [isOpened, setIsOpened] = useState(false);
	const [selected, setSelected] = useState(value);

	if (!icons.length) {
		return null;
	}

	return (
		<BaseControl>
			<BaseControl.VisualLabel>{label}</BaseControl.VisualLabel>
			<Button
				isTertiary
				variant="tertiary"
				isPressed={isOpened}
				onClick={() => {
					setIsOpened(!isOpened);
				}}
			>
				{!value
					? __('Add Icon', 'wpd-blocks')
					: __('Update Icon', 'wpd-blocks')}
			</Button>
			{isOpened && (
				<Modal
					title={label}
					onRequestClose={() => {
						setIsOpened(false);
					}}
				>
					{chunk(icons, 5).map((line) => (
						<Flex
							key={line.map((icon) => icon.value).join('|')}
							justify="flex-start"
						>
							{line.map((icon) => (
								<FlexItem
									key={icon.value}
									style={{
										marginBottom: 8,
									}}
								>
									<Button
										isPressed={icon.value === value}
										onClick={() => {
											setSelected(icon.value);
										}}
									>
										<Icon
											icon={
												has(icon, 'icon')
													? icon.icon
													: icon.value
											}
										/>
									</Button>
								</FlexItem>
							))}
						</Flex>
					))}
					<Flex justify="flex-end">
						<FlexItem>
							<Button
								isPrimary
								variant="primary"
								onClick={() => {
									onChange(selected);
									setIsOpened(false);
								}}
							>
								{__('Set Icon', 'wpd-blocks')}
							</Button>
						</FlexItem>
					</Flex>
				</Modal>
			)}
		</BaseControl>
	);
}
